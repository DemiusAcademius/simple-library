package human.demius.auth.database.model;

import human.demius.library.database.model.Client;
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

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(
            name = "user_authorities",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "authority_name"))
    Set<Authority> userAuthorities;

    // @OneToOne(mappedBy = "user", fetch = FetchType.LAZY)
    // private Client client;
}
