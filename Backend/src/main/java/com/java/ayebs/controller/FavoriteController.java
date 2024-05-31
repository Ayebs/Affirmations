package com.java.ayebs.controller;

import com.java.ayebs.model.Favorite;
import com.java.ayebs.repository.AffirmationRepository;
import com.java.ayebs.repository.FavRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/favorites")
public class FavoriteController {

    @Autowired
    private FavRepository favRepository;

    @Autowired
    private AffirmationRepository affirmationRepository;

    @PostMapping("/add")
    public ResponseEntity<Favorite> addFavorite(@RequestBody Favorite favorite) {
        Favorite savedFavorite = favRepository.save(favorite);
        return ResponseEntity.ok(savedFavorite);
    }
}
