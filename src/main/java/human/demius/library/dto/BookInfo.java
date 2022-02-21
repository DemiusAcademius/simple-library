package human.demius.library.dto;

import human.demius.library.database.model.Book;

import java.util.Collection;

public record BookInfo(
        String isbn,
        String name,
        String picture,
        String publisher,
        short publishYear,
        Collection<String> authors) {
    public static BookInfo fromBook(Book book) {
        return new BookInfo(
                book.getIsbn(),
                book.getName(),
                book.getPicture(),
                book.getPublisher().getName(),
                book.getPublishYear(),
                book.getAuthors()
                        .stream()
                        .map(it -> it.getFirst_name() + " " + it.getLast_name())
                        .toList());
    }
}
