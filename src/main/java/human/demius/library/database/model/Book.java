package human.demius.library.database.model;

import lombok.*;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "books")
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Getter
@Setter
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String isbn;

    private String name;
    @Column(name="publish_year", length = 4)
    private short publishYear;
    private String picture;

    @ManyToOne
    @JoinColumn(name="publisher_id", nullable=false)
    private Publisher publisher;

    @ManyToMany(mappedBy = "writeBooks")
    Set<Author> authors;

    @OneToOne(mappedBy = "book", cascade = CascadeType.ALL)
    @PrimaryKeyJoinColumn
    private BookStore store;

    @OneToOne(mappedBy = "book", cascade = CascadeType.ALL)
    @PrimaryKeyJoinColumn
    private BookRating rating;

    @OneToMany(mappedBy = "book")
    Set<BorrowedBook> clients;
}
