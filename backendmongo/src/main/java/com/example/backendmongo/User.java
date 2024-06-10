package com.example.backendmongo;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "users")
public class User {
    private String Username;
    private String Useremail;
    private Long Userphone;
    private int Userage;
    private int Userorders;
    private String Userlocation;



}
