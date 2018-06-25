package com.todo.list.entities;

import javax.persistence.*;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Objects;
import java.util.TimeZone;

@Entity
@Table(name = "Items")
public class ToDoItemEntity {
    @Id
    @GeneratedValue
    private long id;
    private String name;
    //private int count;
    private boolean isDone;
    private String description;
    private String date;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public boolean isDone() {
        return isDone;
    }

    public void setDone(boolean done) {
        isDone = done;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }


    @Override
    public String toString() {
        return "ToDoItemEntity{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", isDone=" + isDone +
                ", description='" + description + '\'' +
                ", date='" + date + '\'' +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ToDoItemEntity that = (ToDoItemEntity) o;
        return id == that.id &&
                isDone == that.isDone &&
                Objects.equals(name, that.name) &&
                Objects.equals(description, that.description) &&
                Objects.equals(date, that.date) ;
    }

    @Override
    public int hashCode() {

        return Objects.hash(id, name, isDone, description, date);
    }
}
