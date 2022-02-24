package human.demius.library.database.model;

import human.demius.auth.database.model.Authority;
import lombok.*;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "authors")
@NoArgsConstructor
@ToString
@Getter
@Setter
public class Author {
    @Id
    private int id;
    private String first_name;
    private String last_name;

    public Author(String first_name, String last_name) {
        this.first_name = first_name;
        this.last_name = last_name;
    }

    @ManyToMany
    @JoinTable(
            name = "book_authors",
            joinColumns = @JoinColumn(name = "author_id"),
            inverseJoinColumns = @JoinColumn(name = "book_isbn"))
    Set<Authority> writeBooks;
}
