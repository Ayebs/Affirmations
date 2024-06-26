package com.java.ayebs.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class Config {

    @Bean
    public WebMvcConfigurer corsConfig() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/api/**")
                        .allowedOrigins("http://localhost:5173", "chrome-extension://hahkclcnohcmdggfeignbkkbdodjpdak")
                        .allowedMethods("GET", "POST", "PUT", "HEAD", "OPTIONS")
                        .allowedHeaders("*")
                        .allowCredentials(true);

            }
        };
    }

}
