package com.java.ayebs.service;

import com.java.ayebs.model.Affirmation;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class AffirmServiceImpl implements AffirmService {

    private List<Affirmation> affirmations;

    public AffirmServiceImpl() {
        affirmations = new ArrayList<>();
        affirmations.add(new Affirmation("Je suis profondement aimé.e par Dieu!❤️"));
        affirmations.add(new Affirmation("Je puis tout par celui qui me fortifie 💪🏽"));
        affirmations.add(new Affirmation("Je reflète la gloire et la beauté de Jésus 🥰️"));
        affirmations.add(new Affirmation("Je suis la lumière du monde ✨"));
        affirmations.add(new Affirmation("Je suis une joyeuse lumière d'espoir️ et de paix 😁"));
        affirmations.add(new Affirmation("Dieu se soucie de moi; il sínteresse a mon quotidien 🤗️"));
        affirmations.add(new Affirmation("Je ne suis pas timide; j'ai lésprit de force, d'amour et de sagesse!💜"));
        affirmations.add(new Affirmation("Dieu me juge précieux.se a ses yeux 🥹"));
        affirmations.add(new Affirmation("Je ne crains aucun mal, Dieu est la force qui me sauve!️ 😉"));
        affirmations.add(new Affirmation("Je suis une personne très bénie, grandement aidée par Dieu! 🤩"));
    }

    @Override
    public Affirmation getRandomAffirmation() {
        int index = (int) (Math.random() * affirmations.size());
        return affirmations.get(index);
    }

    @Override
    public List<Affirmation> getAllAffirmations() {
        return affirmations;
    }
}
