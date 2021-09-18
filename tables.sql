create table customer (customer_id interger not null unique, 
name text,
lastname text,
document interger not null unique);

create table card (customer_id interger not null,
card_number interger not null unique,
balance real
);

create table card_transactions (
    transaction_id interger not null unique,
    card_number interger not null,
    amount real,
    transaction_type text check(transaction_type in ("credit", "debit"))
);

insert into customer values(1, 'prueba', 'prueba', 1234567890);

insert into card values(1, '5555-5555-5555-5555', 0);

insert into card_transactions values(1, '5555-5555-5555-5555', 10.5, 'debit');