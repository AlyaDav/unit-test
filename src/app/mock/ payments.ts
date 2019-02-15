import { Payment } from "../models/payment";
import { mockMonths } from "./months";

export const payments: Payment[] = [
    {
        name: 'Интернет',
        cost: 600,
        months: mockMonths[0]
    },
    {
        name: 'Домашний телефон',
        cost: 500,
        months: mockMonths[1]
    },
    {
        name: 'Мобильный телефон',
        cost: 300,
        months: mockMonths[2]
    },
    {
        name: 'IPTV',
        cost: 200,
        months: mockMonths[3]
    },
    {
        name: 'Подписка на музыку',
        cost: 150,
        months: mockMonths[4]
    },
    {
        name: 'Подписка на фильмы',
        cost: 150,
        months: mockMonths[5]
    },
    {
        name: 'Абонимент на фитнес',
        cost: 1000,
        months: mockMonths[6]
    }
]

export const mockDisplayedColumns: string[] = [
    'Наименование платежа', 'Стоимость за день', 'Янв',
    'Фев', 'Мар', 'Апр', 'Май',
    'Июн', 'Июл', 'Авг', 'Сен',
    'Окт', 'Ноя', 'Дек', 'Удалить'];
