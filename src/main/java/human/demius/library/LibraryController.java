package human.demius.library;

import human.demius.library.database.model.Author;
import human.demius.library.database.model.Book;
import human.demius.library.database.repos.AuthorRepository;
import human.demius.library.database.repos.BookRepository;
import human.demius.library.database.repos.PublisherRepository;
import human.demius.library.dto.*;
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

    @PostMapping("/authors/")
    @Transactional
    public void addAuthor(@RequestBody AuthorRequestBody author) {
        authorRepository.save(new Author(author.getFirstName(), author.getLastName()));
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
    public void addBook(@RequestBody BookRequestBody book) {
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

    @PutMapping("/books/{isbn}")
    @Transactional
    public void updateBook(@PathVariable String isbn, @RequestBody BookRequestBody book) {
        var foundBook = bookRepository.getById(isbn);

        if (foundBook.getPublisher().getId() != book.getPublisher()) {
            // request new bublisher
            // TODO: change publisher
        }

        // TODO: change authors

        foundBook.setName(book.getName());
        foundBook.setPicture(book.getPicture());
        foundBook.setPublishYear(book.getPublishYear());
        bookRepository.save(foundBook);
    }

    @DeleteMapping("/books/{isbn}")
    @Transactional
    public void deleteBook(@PathVariable String isbn) {
        bookRepository.deleteById(isbn);
    }

}
