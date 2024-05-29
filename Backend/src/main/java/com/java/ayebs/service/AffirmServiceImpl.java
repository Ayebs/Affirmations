package com.java.ayebs.service;

import com.java.ayebs.model.Affirmation;
import com.java.ayebs.repository.AffirmationRepository;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

@Service
public class AffirmServiceImpl implements AffirmService {

    private final AffirmationRepository affirmationRepository;

    @Autowired
    public AffirmServiceImpl(AffirmationRepository affirmationRepository) {
        this.affirmationRepository = affirmationRepository;
    }

    @PostConstruct
    public void init() {
        if (affirmationRepository.count() == 0) {
//            affirmationRepository = new ArrayList<>();
            affirmationRepository.save(new Affirmation("Je suis profondement aimé.e par Dieu!❤️"));
            affirmationRepository.save(new Affirmation("Je puis tout par celui qui me fortifie 💪🏽"));
            affirmationRepository.save(new Affirmation("Je reflète la gloire et la beauté de Jésus 🥰️"));
            affirmationRepository.save(new Affirmation("Je suis la lumière du monde ✨"));
            affirmationRepository.save(new Affirmation("Je suis une joyeuse lumière d'espoir️ et de paix 😁"));
            affirmationRepository.save(new Affirmation("Dieu se soucie de moi; il s'intéresse a mon quotidien 🤗️"));
            affirmationRepository.save(new Affirmation("Je ne suis pas timide; j'ai l'esprit de force, d'amour et de sagesse!💜"));
            affirmationRepository.save(new Affirmation("Dieu me juge précieux.se a ses yeux 🥹"));
            affirmationRepository.save(new Affirmation("Je ne crains aucun mal, Dieu est la force qui me sauve!️ 😉"));
            affirmationRepository.save(new Affirmation("Je suis une personne très bénie, grandement aidée par Dieu! 🤩"));
        }
    }


    @Override
    public Affirmation getRandomAffirmation() {
        List<Affirmation> affirmations = affirmationRepository.findAll();
        int index = new Random().nextInt(affirmations.size());
        return affirmations.get(index);
    }

    @Override
    public List<Affirmation> getAllAffirmations() {
        return affirmationRepository.findAll();
    }
}
