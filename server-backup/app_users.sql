-- Table: public.app_users

-- DROP TABLE public.app_users;

CREATE TABLE public.app_users
(
    id bigint NOT NULL DEFAULT nextval('app_users_id_seq'::regclass),
    email character varying(50) COLLATE pg_catalog."default" NOT NULL,
    social_id character varying(50) COLLATE pg_catalog."default",
    password character varying(50) COLLATE pg_catalog."default" NOT NULL,
    is_logged_in bit(1),
    session_token text COLLATE pg_catalog."default",
    CONSTRAINT app_users_pkey PRIMARY KEY (email)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.app_users
    OWNER to postgres;