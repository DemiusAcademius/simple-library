package human.demius.auth.beans;

import human.demius.auth.LibraryUserDetails;
import human.demius.auth.database.repos.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

// TODO: encrypt passwords in database with BVCrypt
// SEE: https://www.javainuse.com/spring/boot_security_jdbc_authentication_bcrypt and https://www.javainuse.com/onlineBcrypt

@Service
public class JwtUserDetailsService implements UserDetailsService {
    private static final Logger logger = LoggerFactory.getLogger(JwtUserDetailsService.class);

    @Autowired
    UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        var user = userRepository.findByName(username)
                .orElseThrow(() -> new UsernameNotFoundException("User Not Found with username: " + username));

        logger.info("user " + user.getName() + " has " + user.getUserAuthorities().size() + " roles");

        return LibraryUserDetails.build(user);
    }
}
