package br.com.havyner.mtgcollection.Entity;

import javax.persistence.*;

@Entity
@Table(name = "Cards")
public class CardEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "id")
    private Integer id;

    @Column(name = "name")
    private String name;

    @Column(name = "mana_cost")
    private String manaCost;

    @Column(name = "cmc")
    private String cmc;

    @Column(name = "type_line")
    private String typeLine;

    @Column(name = "oracle_text")
    private String oracleText;

    @Column(name = "colors")
    private String colors;

    @Column(name = "magic_set_name")
    private String magicSetName;

    @Column(name = "rarity")
    private String rarity;

    @Column(name = "image")
    private String image;

    public CardEntity() {

    }

    public CardEntity(String name, String manaCost, String cmc, String typeLine, 
        String oracleText, String colors, String magicSetName, String rarity,
        String image) {
        this.name = name;
        this.manaCost = manaCost;
        this.cmc = cmc;
        this.typeLine = typeLine;
        this.oracleText = oracleText;
        this.colors = colors;
        this.magicSetName = magicSetName;
        this.rarity = rarity;
        this.image = image;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getManaCost() {
        return manaCost;
    }

    public void setManaCost(String manaCost) {
        this.manaCost = manaCost;
    }

    public String getCmc() {
        return cmc;
    }

    public void setCmc(String cmc) {
        this.cmc = cmc;
    }

    public String getTypeLine() {
        return typeLine;
    }

    public void setTypeLine(String typeLine) {
        this.typeLine = typeLine;
    }

    public String getOracleText() {
        return oracleText;
    }

    public void setOracleText(String oracleText) {
        this.oracleText = oracleText;
    }

    public String getColors() {
        return colors;
    }

    public void setColors(String colors) {
        this.colors = colors;
    }

    public String getMagicSetName() {
        return magicSetName;
    }

    public void setMagicSetName(String magicSetName) {
        this.magicSetName = magicSetName;
    }

    public String getRarity() {
        return rarity;
    }

    public void setRarity(String rarity) {
        this.rarity = rarity;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }
}
