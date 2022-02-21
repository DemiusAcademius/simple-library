package human.demius.library;

import human.demius.library.database.model.Author;
import human.demius.library.database.model.Book;
import human.demius.library.database.repos.AuthorRepository;
import human.demius.library.database.repos.BookRepository;
import human.demius.library.database.repos.PublisherRepository;
import human.demius.library.dto.AddBookRequestBody;
import human.demius.library.dto.AuthorInfo;
import human.demius.library.dto.BookInfo;
import human.demius.library.dto.PublisherInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.Collection;
import java.util.Objects;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/library")
public class LibraryController {

    @Autowired
    AuthorRepository authorRepository;

    @GetMapping("authors")
    public Collection<AuthorInfo> listAllAuthors() {
        return authorRepository
                .findAll()
                .stream()
                .map(AuthorInfo::fromAuthor)
                .toList();
    }

    @Autowired
    PublisherRepository publisherRepository;

    @GetMapping("publishers")
    public Collection<PublisherInfo> listAllPublishers() {
        return publisherRepository
                .findAll()
                .stream()
                .map(PublisherInfo::fromPublisher)
                .toList();
    }

    @Autowired
    BookRepository bookRepository;

    @GetMapping("/books")
    public Collection<BookInfo> listBooks() {
        return bookRepository
                .findAll()
                .stream()
                .map(BookInfo::fromBook)
                .toList();
    }

    @PostMapping("/books/")
    @Transactional
    public void addBook(@RequestBody AddBookRequestBody book) {
        var publisher = publisherRepository.getById(book.getPublisher());
        var authors = Arrays
                .stream(book.getAuthors())
                .sequential()
                .mapToObj(it -> authorRepository.getById(it))
                        .filter(Objects::nonNull)
                                .collect(Collectors.toSet());

        bookRepository.save(
                new Book(
                        book.getIsbn(),
                        book.getName(),
                        book.getPublishYear(),
                        book.getPicture(),
                        publisher,
                        authors, null, null, null));
    }

}
