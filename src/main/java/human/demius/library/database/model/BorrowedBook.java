package human.demius.library.database.model;

import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "borrowed_books")
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Getter
@Setter
public class BorrowedBook {
    @Id
    private int id;

    @Column(name="borrow_date")
    LocalDate borrowDate;

    @ManyToOne
    @JoinColumn(name = "book_isbn")
    Book book;

    @ManyToOne
    @JoinColumn(name = "client_id")
    Client client;
}
