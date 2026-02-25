import org.springframework.boot.gradle.tasks.bundling.BootJar

plugins {
    id("buildlogic.java-conventions")
    id("dev.funixgaming.spring.conventions") version libs.versions.dev.funixgaming.spring.core
}

group = "dev.funixgaming.margueritel.portfolio.api.projects.api"
description = "marguerite-l-protfollio-api-projects-api"
version = "1.0.0"

dependencies {
    implementation(libs.dev.funixgaming.core.storage)
}

tasks.getByName<BootJar>("bootJar") {
    enabled = false
}
tasks.getByName<Jar>("jar") {
    enabled = true
}
