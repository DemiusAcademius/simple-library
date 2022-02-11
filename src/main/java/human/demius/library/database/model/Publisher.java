package human.demius.library.database.model;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import java.util.Set;

@Entity
@Table(name = "publishers")
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Getter
@Setter
public class Publisher {
    @Id
    private int id;
    private String name;

    @OneToMany(mappedBy="publisher")
    private Set<Book> books;
}
