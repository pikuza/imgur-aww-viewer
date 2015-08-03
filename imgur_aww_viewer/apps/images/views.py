from django.views.generic import TemplateView

class IndexView(TemplateView):
    template_name = 'images/index.html'


class DetailView(TemplateView):
    template_name = 'images/detail.html'

    def get_context_data(self, **kwargs):
        context = super(DetailView, self).get_context_data(**kwargs)
        context['image_id'] = self.kwargs['image_id']
        return context
