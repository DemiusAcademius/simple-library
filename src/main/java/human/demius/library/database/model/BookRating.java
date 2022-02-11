package human.demius.library.database.model;

import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "books_ratings")
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Getter
@Setter
public class BookRating {
    @Id
    @Column(name = "book_isbn")
    private String isbn;
    @Column(name="borrow_count")
    private short borrowCount;

    @OneToOne
    @MapsId
    @JoinColumn(name = "book_isbn")
    private Book book;
}
