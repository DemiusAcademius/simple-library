package human.demius.auth;

// SEE: https://www.bezkoder.com/spring-boot-security-postgresql-jwt-authentication/

import human.demius.auth.beans.JwtTokenUtils;
// import human.demius.auth.database.repos.UserRepository;
import human.demius.auth.beans.JwtUserDetailsService;
import human.demius.auth.payload.request.LoginRequest;
import human.demius.auth.payload.response.JwtResponse;
import human.demius.auth.payload.response.UserInfoResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

// @CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/auth")
public class AuthController {
    private static final Logger logger = LoggerFactory.getLogger(AuthController.class);

    @Autowired
    AuthenticationManager authenticationManager;
    /*
    Autowired
    UserRepository userRepository;

    @Autowired
    PasswordEncoder encoder;
    */
    @Autowired
    JwtTokenUtils jwtUtils;

    @PostMapping("/login")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtUtils.generateJwtToken(authentication);

        var userDetails = (LibraryUserDetails) authentication.getPrincipal();
        List<String> roles = extractRolesFromUserDetails(userDetails);

        return ResponseEntity.ok(new JwtResponse(jwt,
                userDetails.getId(),
                userDetails.getUsername(),
                roles));
    }

    @GetMapping("/userinfo")
    public UserInfoResponse getUserInfo() {
        var authentication = SecurityContextHolder.getContext().getAuthentication();
        var prinipal = (LibraryUserDetails) authentication.getPrincipal();

        List<String> roles = extractRolesFromUserDetails(prinipal);

        return new UserInfoResponse(prinipal.getId(), prinipal.getUsername(), roles);
    }

    private static List<String> extractRolesFromUserDetails(LibraryUserDetails userDetails) {
        var roles = userDetails.getAuthorities().stream()
                .map(GrantedAuthority::getAuthority)
                .toList();
        return roles;
    }
}
