package com.java.ayebs.controller;

import com.java.ayebs.model.Affirmation;
import com.java.ayebs.service.AffirmService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/affirmations")
public class AffirmController {

    private final AffirmService affirmService;

    @Autowired
    public AffirmController(AffirmService affirmService) {
        this.affirmService =affirmService;
    }

    @GetMapping("/random")
    public Affirmation getRandomAffirmation() {
        return affirmService.getRandomAffirmation();
    }

    @GetMapping("/all")
    public List<Affirmation> getAllAffirmations() {
        return affirmService.getAllAffirmations();
    }
}
