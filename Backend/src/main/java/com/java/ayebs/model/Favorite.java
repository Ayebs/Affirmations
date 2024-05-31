package com.java.ayebs.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Favorite {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "affirmation")
    private Affirmation affirmation;

    private String username;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Affirmation getAffirmation() {
        return affirmation;
    }

    public void setAffirmation(Affirmation affirmation) {
        this.affirmation = affirmation;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username =username;
    }
}
