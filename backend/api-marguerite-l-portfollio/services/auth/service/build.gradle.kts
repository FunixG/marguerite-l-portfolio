plugins {
    id("buildlogic.java-conventions")
    id("dev.funixgaming.spring.conventions.service") version libs.versions.dev.funixgaming.spring.core
}

group = "dev.funixgaming.margueritel.portfolio.api.auth.service"
description = "marguerite-l-protfollio-api-auth-service"
version = "1.0.0"

dependencies {
    implementation(libs.dev.funixgaming.core.crud)
    implementation(project(":services:auth:api"))
}
