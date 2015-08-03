from django.conf import settings as stngs


def settings(request):
    """ Adds django settings to template context.
    """
    return {'settings': stngs}
