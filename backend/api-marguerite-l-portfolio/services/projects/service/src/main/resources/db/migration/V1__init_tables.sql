create table projects
(
    id             bigserial primary key,
    created_at     timestamp(6) not null,
    updated_at     timestamp(6),
    uuid           varchar(255) not null constraint uk_projects_public_id unique,
    title          varchar(255) not null,
    description    text not null,
    path           varchar(255) not null constraint uk_projects_path unique,
    is_visible     boolean not null,
    html_code      text not null,
    json_code      text not null,
    cover_media_id varchar(255) not null
);

create table projects_media
(
    id                  bigserial primary key,
    created_at          timestamp(6) not null,
    updated_at          timestamp(6),
    uuid                varchar(255) not null constraint uk_projects_media_public_id unique,
    file_name           VARCHAR(255) NOT NULL,
    file_path           VARCHAR(255) NOT NULL,
    file_extension      VARCHAR(255) NOT NULL,
    file_size           bigint not null,
    media_description   varchar(255) not null,
    media_type          varchar(255) not null
);
