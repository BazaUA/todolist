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
    private int count;
    private boolean isDone;
    private String description;
    private String date;
    @Transient
    private final SimpleDateFormat dateFormat
            = new SimpleDateFormat("dd-MM-yyyy HH:mm");

    public long getId() {

        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public Date getDate() throws ParseException {
        return dateFormat.parse(this.date);
    }

    public void setDate(Date date) {
        this.date = dateFormat.format(date);
        System.out.println(date);
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }


    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getCount() {
        return count;
    }

    public void setCount(int count) {
        this.count = count;
    }

    public boolean isDone() {
        return isDone;
    }

    public void setDone(boolean done) {
        isDone = done;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ToDoItemEntity toDoItem = (ToDoItemEntity) o;
        return id == toDoItem.id &&
                count == toDoItem.count &&
                isDone == toDoItem.isDone &&
                Objects.equals(name, toDoItem.name);
    }

    @Override
    public int hashCode() {

        return Objects.hash(id, name, count, isDone);
    }

    @Override
    public String toString() {
        return "ToDoItemEntity{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", count=" + count +
                ", isDone=" + isDone +
                '}';
    }
}
