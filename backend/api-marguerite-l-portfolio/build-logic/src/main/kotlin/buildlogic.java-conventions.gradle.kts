plugins {
    `java-library`
}

group = "dev.funixgaming.margueritel.portfolio.api"
version = "1.0.0"

java {
    sourceCompatibility = JavaVersion.VERSION_25

    toolchain {
        languageVersion = JavaLanguageVersion.of(25)
    }
}

repositories {
    gradlePluginPortal()
    mavenCentral()
    mavenLocal()

    maven {
        url = uri("https://maven.pkg.github.com/FunixG/spring-boot-crud-lib")
        credentials {
            username = System.getenv("GITHUB_AUTH_USERNAME")
            password = System.getenv("GITHUB_AUTH_TOKEN")
        }
    }
}

configurations.named("compileOnly") {
    extendsFrom(configurations.named("annotationProcessor").get())
}

tasks.withType<Test> {
    useJUnitPlatform()
}