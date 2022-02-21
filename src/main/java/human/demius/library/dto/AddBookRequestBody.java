package human.demius.library.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AddBookRequestBody {
    private String isbn;
    private String name;
    private String picture;
    private int publisher; // id of publisher
    private short publishYear;
    private int[] authors;
}
