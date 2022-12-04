create database interestcalculator;

create table paymentRate(
"id" serial unique,
"transactionType" varchar(32) not null primary key,
"transactionPercentage" decimal not null,
"monthPercentage" decimal
);

INSERT INTO "paymentrate"("transactionType", "transactionPercentage", "monthPercentage") VALUES('cash', -10, 0);
INSERT INTO "paymentrate"("transactionType", "transactionPercentage", "monthPercentage") VALUES('pix', -15, 0);
INSERT INTO "paymentrate"("transactionType", "transactionPercentage", "monthPercentage") VALUES('debit', -5, 0);
INSERT INTO "paymentrate"("transactionType", "transactionPercentage", "monthPercentage") VALUES('credit', 0, 1);
