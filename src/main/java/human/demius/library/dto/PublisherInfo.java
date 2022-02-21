package human.demius.library.dto;

import human.demius.library.database.model.Publisher;

public record PublisherInfo(int id, String name) {
    public static PublisherInfo fromPublisher(Publisher publisher) {
        return new PublisherInfo(publisher.getId(), publisher.getName());
    }
}
