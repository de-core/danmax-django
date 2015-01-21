Не забудьте прописать настройки вашего мейлинг-сервера.
Прописываются они в файле danmax/settings.py:

EMAIL_HOST      = 'smtp.domain.com'
EMAIL_HOST_USER = 'example@domain.ru'
EMAIL_HOST_PASSWORD = 'password'
EMAIL_PORT      = 587
EMAIL_USE_TLS   = True

Также выставить ALLOWED_HOSTS