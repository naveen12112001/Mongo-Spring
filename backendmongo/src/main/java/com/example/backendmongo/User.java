package com.example.backendmongo;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "users")
public class User {
    @Id
    private String _id;
    private String Username;
    private String Useremail;
    private Long Userphone;
    private int Userage;
    private int Userorders;
    private String Userlocation;
}
