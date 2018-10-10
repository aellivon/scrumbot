from rest_framework_jwt.serializers import VerifyJSONWebTokenSerializer
from django.http import HttpResponseForbidden

class JwtViewLoginRequiredMixIn():
    """
            Checking if the user has a token (logged in) before he can  use 
        the views.

            This is needed since we are using a drf jwt token and some views on 
        produce report are plain views and not viewset.

        (The normal 'permission_class=is_authenticated' from the django rest won't 
            work since it's plain views)
        (The 'Loginrequiredmixin' also doesn't work since we are just passing a token)

    """
    def dispatch(self, *args, **kwargs):

        token = self.request.COOKIES
        # Checking if the passed token is valid else pass a forbidden error
        try:
            valid_data = VerifyJSONWebTokenSerializer().validate(token)
        except Exception:
            return HttpResponseForbidden()
        return super().dispatch(*args, **kwargs) 