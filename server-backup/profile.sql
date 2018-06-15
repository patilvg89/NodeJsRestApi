-- Table: public.profile

-- DROP TABLE public.profile;

CREATE TABLE public.profile
(
    id bigint NOT NULL DEFAULT nextval('profile_id_seq'::regclass),
    fk_app_users character varying(50) COLLATE pg_catalog."default" NOT NULL,
    name character varying(50) COLLATE pg_catalog."default",
    dob character varying(20) COLLATE pg_catalog."default",
    url_image text COLLATE pg_catalog."default",
    occupation character varying(50) COLLATE pg_catalog."default",
    CONSTRAINT profile_pkey PRIMARY KEY (fk_app_users),
    CONSTRAINT profile_fk_app_users_fkey FOREIGN KEY (fk_app_users)
        REFERENCES public.app_users (email) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.profile
    OWNER to postgres;