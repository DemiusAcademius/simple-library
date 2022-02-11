package human.demius.library.database.model;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import java.util.Set;

@Entity
@Table(name = "authorities")
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Getter
@Setter
public class Authrity {
    @Id
    private short id;
    private String name;

    @ManyToMany(mappedBy = "userAuthorities")
    Set<User> authoried;
}
