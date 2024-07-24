from django.urls import path

from user_api.views import v1 as v1_view


urlpatterns = [
    path(
        'registration',
        v1_view.UserRegistrationView.as_view(),
        name='register',
    ),
    path(
        'login',
        v1_view.UserLoginView.as_view(),
        name='login',
    ),
    path(
        'refresh',
        v1_view.RefreshTokenView.as_view(),
        name='refresh_token',
    ),
    path(
        'profile',
        v1_view.UserProfileView.as_view(),
        name='profile',
    ),
    path(
        'changepassword',
        v1_view.ChangeUserPasswordView.as_view(),
        name='change_password',
    )
]
