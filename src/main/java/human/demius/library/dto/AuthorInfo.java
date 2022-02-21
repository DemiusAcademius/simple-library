package human.demius.library.dto;

import human.demius.library.database.model.Author;

public record AuthorInfo(
        int id,
        String firstName,
        String lastName
) {
    public static AuthorInfo fromAuthor(Author author) {
        return new AuthorInfo(author.getId(), author.getFirst_name(), author.getLast_name());
    }
}
