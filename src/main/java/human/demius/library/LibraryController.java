package human.demius.library;

import human.demius.library.database.repos.BookRepository;
import human.demius.library.dto.BookInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;

@RestController
@RequestMapping("/api/library")
public class LibraryController {

    @Autowired
    BookRepository bookRepository;

    @RequestMapping({ "/books" })
    public Collection<BookInfo> listBooks() {
        return bookRepository
                .findAll()
                .stream()
                .map(BookInfo::fromBook)
                .toList();
    }

}
