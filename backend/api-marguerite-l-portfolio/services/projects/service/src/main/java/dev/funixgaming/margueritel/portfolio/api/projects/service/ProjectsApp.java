package dev.funixgaming.margueritel.portfolio.api.projects.service;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.scheduling.annotation.EnableScheduling;

@EnableFeignClients(basePackages = "dev.funixgaming.margueritel.portfolio.api.auth.api.clients")
@SpringBootApplication(scanBasePackages = "dev.funixgaming")
@EnableScheduling
public class ProjectsApp {

    static void main(String[] args) {
        SpringApplication.run(ProjectsApp.class, args);
    }

}
