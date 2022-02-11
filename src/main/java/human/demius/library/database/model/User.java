package human.demius.library.database.model;

import lombok.*;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "users")
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Getter
@Setter
public class User {
    @Id
    private int id;
    private String name;
    private String password;

    @ManyToMany
    @JoinTable(
            name = "user_authorities",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "authority_id"))
    Set<Authrity> userAuthorities;

    @OneToOne(mappedBy = "user", fetch = FetchType.LAZY)
    private Client client;
}
