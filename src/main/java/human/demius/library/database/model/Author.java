package human.demius.library.database.model;

import lombok.*;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "authors")
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Getter
@Setter
public class Author {
    @Id
    private int id;
    private String name;

    @ManyToMany
    @JoinTable(
            name = "book_authors",
            joinColumns = @JoinColumn(name = "author_id"),
            inverseJoinColumns = @JoinColumn(name = "book_isbn"))
    Set<Authrity> writeBooks;
}
