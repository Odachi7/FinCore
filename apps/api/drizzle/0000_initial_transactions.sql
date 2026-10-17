CREATE TYPE "public"."transaction_type" AS ENUM('income', 'expense');--> statement-breakpoint
CREATE TABLE "transactions" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "transactions_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"description" text NOT NULL,
	"amount_in_cents" integer NOT NULL,
	"type" "transaction_type" NOT NULL,
	"occurred_at" timestamp with time zone NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
