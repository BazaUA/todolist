package com.todo.list.entities;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.todo.list.deserializer.ToDoItemDeserializer;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Date;
import java.util.Objects;

@Entity
@JsonDeserialize(using = ToDoItemDeserializer.class)
@Table(name = "Items")
public class ToDoItemEntity {
    @Id
    @GeneratedValue
    private long id;
    private String name;
    private boolean isDone;
    private Date date;

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


    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        if (this.date == null) {
            this.date = new Date(date.getTime());
        } else {
            this.date.setTime(date.getTime());
        }
    }

//    public String getDate() {
//        return date;
//    }
//
//    public void setDate(String date) {
//        this.date = date;
//    }


    @Override
    public String toString() {
        return "ToDoItemEntity{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", isDone=" + isDone +
                ", date='" + date.toString() + '\'' +
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
                Objects.equals(date, that.date);
    }

    @Override
    public int hashCode() {

        return Objects.hash(id, name, isDone, date);
    }
}
