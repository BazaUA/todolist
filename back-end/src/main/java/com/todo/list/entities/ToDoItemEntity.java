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

    public boolean isDone() {
        return isDone;
    }

    public void setDone(boolean done) {
        isDone = done;
    }

    @Override
    public String toString() {
        return "ToDoItemEntity{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", isDone=" + isDone +
                ", description='" + description + '\'' +
                ", date='" + date + '\'' +
                ", dateFormat=" + dateFormat +
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
                Objects.equals(date, that.date) &&
                Objects.equals(dateFormat, that.dateFormat);
    }

    @Override
    public int hashCode() {

        return Objects.hash(id, name, isDone, description, date, dateFormat);
    }
}
