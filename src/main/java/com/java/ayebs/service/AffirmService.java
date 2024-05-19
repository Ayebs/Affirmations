package com.java.ayebs.service;

import com.java.ayebs.model.Affirmation;

import java.util.List;

public interface AffirmService {
    Affirmation getRandomAffirmation();
    List<Affirmation> getAllAffirmations();
}

