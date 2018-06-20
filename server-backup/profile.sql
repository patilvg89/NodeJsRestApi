-- Table: public.profiles

-- DROP TABLE public.profiles;

CREATE TABLE public.profiles
(
    id integer NOT NULL DEFAULT nextval('profiles_id_seq'::regclass),
    name character varying(255) COLLATE pg_catalog."default",
    dob character varying(255) COLLATE pg_catalog."default",
    url_image character varying(255) COLLATE pg_catalog."default",
    occupation character varying(255) COLLATE pg_catalog."default",
    "appUserEmail" character varying(255) COLLATE pg_catalog."default",
    CONSTRAINT profiles_pkey PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.profiles
    OWNER to postgres;