import { Payment } from "../models/payment";
import { mockMonths } from "./months";

export const payments: Payment[] = [
    {
        name: 'Интернет',
        cost: 600,
        months: mockMonths[0].months
    },
    {
        name: 'Домашний телефон',
        cost: 500,
        months: mockMonths[1].months
    },
    {
        name: 'Мобильный телефон',
        cost: 300,
        months: mockMonths[2].months
    },
    {
        name: 'IPTV',
        cost: 200,
        months: mockMonths[3].months
    },
    {
        name: 'Подписка на музыку',
        cost: 150,
        months: mockMonths[4].months
    },
    {
        name: 'Подписка на фильмы',
        cost: 150,
        months: mockMonths[5].months
    },
    {
        name: 'Абонимент на фитнес',
        cost: 1000,
        months: mockMonths[6].months
    }
]

export const mockDisplayedColumns: string[] = [
    'Наименование платежа', 'Стоимость за день', 'Янв',
    'Фев', 'Мар', 'Апр', 'Май',
    'Июн', 'Июл', 'Авг', 'Сен',
    'Окт', 'Ноя', 'Дек', 'Удалить'];
