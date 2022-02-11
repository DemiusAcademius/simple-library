package human.demius.library.database.model;

import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "books_store")
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Getter
@Setter
public class BookStore {
    @Id
    @Column(name = "book_isbn")
    private String isbn;
    private short copies;

    @OneToOne
    @MapsId
    @JoinColumn(name = "book_isbn")
    private Book book;
}
