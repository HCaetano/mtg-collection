package br.com.havyner.mtgcollection.Controller;

import br.com.havyner.mtgcollection.Entity.CardEntity;
import br.com.havyner.mtgcollection.Service.CardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/api/cards")
public class CardController {

    @Autowired
    private CardService service;

    @GetMapping
    @ResponseBody
    public List<CardEntity> findAll() {
        return service.findAll();
    }

    @GetMapping(value = "/{id}")
    @ResponseBody
    public CardEntity findById(@PathVariable Integer id) {
        return service.findById(id);
    }

    @PostMapping
    @ResponseBody
    public CardEntity save(@RequestBody CardEntity card) {
        return service.save(card);
    }

    @PutMapping(value = "/{id}")
    @ResponseBody
    public CardEntity update(@RequestBody CardEntity card, @PathVariable Integer id) {
        return service.update(card, id);
    }

    @DeleteMapping(value = "/{id}")
    @ResponseBody
    public void delete(@PathVariable Integer id) {
        service.delete(id);
    }
}
