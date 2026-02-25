package dev.funixgaming.margueritel.portfolio.api.projects.service.security;

import dev.funixgaming.margueritel.portfolio.api.auth.api.security.ApiWebSecurity;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AuthorizeHttpRequestsConfigurer;

@Configuration
@EnableWebSecurity
public class WebSecurity extends ApiWebSecurity {

    @Override
    public Customizer<AuthorizeHttpRequestsConfigurer<HttpSecurity>.AuthorizationManagerRequestMatcherRegistry> getUrlsMatchers() {
        return exchanges -> exchanges
                .requestMatchers(HttpMethod.GET).permitAll()
                .anyRequest().authenticated();
    }

}
