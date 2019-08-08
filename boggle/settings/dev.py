from .settings import *

DEBUG = True
ALLOWED_HOSTS = ['*']
INTERNAL_IPS = ('127.0.0.1', 'localhost')

WEBPACK_LOADER = {
    'DEFAULT': {
        'BUNDLE_DIR_NAME': '',
        'STATS_FILE': os.path.join(BASE_DIR, 'frontend/streaming/webpack-stats.json'),
    }
}

STATICFILES_DIRS = [
    os.path.join(BASE_DIR, "static"),
]
MEDIA_URL = '/dmedia/'
MEDIA_ROOT = os.path.join(BASE_DIR, "mediafiles")

STATIC_URL = '/static/'
STATIC_ROOT = os.path.join(BASE_DIR, "staticfiles")

VUE_ROOT = os.path.join(BASE_DIR, "frontend/streaming/static")